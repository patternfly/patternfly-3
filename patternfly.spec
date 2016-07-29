Name:		patternfly3
Summary:	PatternFly open interface project
Version:	3.7.0
Release:	1%{?release_suffix}%{?dist}
License:	ASL 2.0
URL:		https://github.com/patternfly/patternfly
Source:		patternfly-3.7.0.tar.gz

BuildRoot:	%{_tmppath}/%{name}-%{version}-%{release}-root-%(%{__id_u} -n)
BuildArch:	noarch

%description
PatternFly open interface project

%prep
%setup -q -n patternfly-3.7.0

%install
rm -rf "%{buildroot}"
mkdir -p "%{buildroot}/%{_datadir}/%{name}"
cp -ar dist/* "%{buildroot}/%{_datadir}/%{name}/"
rm -rf "%{buildroot}/%{_datadir}/%{name}/tests" || /bin/true

%files
%{_datadir}/%{name}/

%changelog
* Fri Jul 29 2016 Greg Sheremeta <gshereme@redhat.com> - 3.7.0-1
- Initial version.

