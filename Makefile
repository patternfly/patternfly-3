PACKAGE_NAME=patternfly
VERSION=1.1.2
MILESTONE=
ifneq ($(MILESTONE),)
SUFFIX:=_$(MILESTONE)
endif
PACKAGE_VERSION=$(VERSION)$(SUFFIX)
PACKAGE_RPM_VERSION=$(VERSION)
# for milestones
# PACKAGE_RPM_RELEASE=0.0.$(MILESTONE)
# for releases
PACKAGE_RPM_RELEASE=1
ABI=1

PREFIX=/usr/local
DATAROOT_DIR=$(PREFIX)/share
PKG_DATA_DIR=$(DATAROOT_DIR)/$(PACKAGE_NAME)
RESOURCES_DIR=$(DATAROOT_DIR)/patternfly$(ABI)/resources

.SUFFIXES:
.SUFFIXES: .in

all:	patternfly.spec
	rm -fr build
	mkdir -p build/components
	cp -r dist/* build
	cp -r components/* build/components/
	sed -i "s#../../components#../components#g" \
		build/css/patternfly*.css \
		$(NULL)

clean:
	rm -rf build

install:	all
	install -d -m 0755 "$(DESTDIR)$(RESOURCES_DIR)"
	cp -r build/* "$(DESTDIR)$(RESOURCES_DIR)"
	find "$(DESTDIR)$(RESOURCES_DIR)" -type d -exec chmod 0755 {} +
	find "$(DESTDIR)$(RESOURCES_DIR)" -type f -exec chmod 0644 {} +

.PHONY:	patternfly.spec.in
dist:	patternfly.spec
	TMP="$$(mktemp -d)" && mkdir "$${TMP}/$(PACKAGE_NAME)-$(PACKAGE_VERSION)" && \
		git ls-files | \
		tar --files-from /proc/self/fd/0 -c patternfly.spec | \
		tar -C "$${TMP}/$(PACKAGE_NAME)-$(PACKAGE_VERSION)" -x && \
		tar -C "$${TMP}" -czf "$(PACKAGE_NAME)-$(PACKAGE_VERSION).tar.gz" "$(PACKAGE_NAME)-$(PACKAGE_VERSION)"; \
		rm -fr "$${TMP}"

.in:
	sed \
		-e 's/@PACKAGE_NAME@/$(PACKAGE_NAME)/g' \
		-e 's/@PACKAGE_VERSION@/$(PACKAGE_VERSION)/g' \
		-e 's/@PACKAGE_RPM_VERSION@/$(PACKAGE_RPM_VERSION)/g' \
		-e 's/@PACKAGE_RPM_RELEASE@/$(PACKAGE_RPM_RELEASE)/g' \
		$< > $@
