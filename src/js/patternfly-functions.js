// Util: definition of breakpoint sizes for tablet and desktop modes
(function ($) {
  'use strict';
  if (patternfly !== undefined) {
    $.pfBreakpoints = patternfly.pfBreakpoints;
  }
}(jQuery));

      handleResize = true,
      setActiveItem = function (item) {
        // remove all .active
        $('.nav-pf-vertical .list-group-item.active').removeClass('active');
        // add .active to item and its parents
        item.addClass('active').parents('.list-group-item').addClass('active');
      enterMobileState = function () {
        if (!navElement.hasClass('hidden')) {
          //Set the nav to being hidden
          navElement.addClass('hidden');
          navElement.removeClass('collapsed');
          //Set the body class to the correct state
          bodyContentElement.removeClass('collapsed-nav');
          bodyContentElement.addClass('hidden-nav');
          // Reset the collapsed states
          updateSecondaryCollapsedState(false);
          updateTertiaryCollapsedState(false);
          explicitCollapse = false;
        }
      },

      exitMobileState = function () {
        // Always remove the hidden & peek class
        navElement.removeClass('hidden show-mobile-nav');
        // Set the body class back to the default
        bodyContentElement.removeClass('hidden-nav');
      },

      checkNavState = function () {
        var width = $(window).width(), makeSecondaryVisible;
        if (!handleResize) {
          return;
        }
        // Check to see if we need to enter/exit the mobile state
        if (width < $.pfBreakpoints.tablet && !explicitCollapse) {
          enterMobileState();
        } else if (navElement.hasClass('hidden')) {
          exitMobileState();
        $(document).find('.nav-pf-vertical .list-group-item').each(function (index, item) {
          var onClickFn,
            $item = $(item),
            $nav = $item.closest('[class*="nav-pf-"]');
          if ($nav.hasClass('nav-pf-vertical')) {
            // Set main nav active item on click or show secondary nav if it has a secondary nav bar and we are in the mobile state
            onClickFn = function (event) {
              var $this = $(this), $secondaryItem, $tertiaryItem, $activeItem;
              if (!$this.hasClass('secondary-nav-item-pf')) {
                hideSecondaryMenu();
                if (inMobileState()) {
                  updateMobileMenu();
                  navElement.removeClass('show-mobile-nav');
                }
                if (handleSelection) {
                  setActiveItem($this);
                  // Don't process the click on the item
                  event.stopImmediatePropagation();
                }
              } else if (inMobileState()) {
                updateMobileMenu($this);
              } else if (handleSelection) {
                $activeItem = $secondaryItem = $item.find('.nav-pf-secondary-nav > .list-group > .list-group-item').eq(0);

                if ($secondaryItem.hasClass('tertiary-nav-item-pf')) {
                  $activeItem = $secondaryItem.find('.nav-pf-tertiary-nav > .list-group > .list-group-item').eq(0);
                }

                setActiveItem($activeItem);
                event.stopImmediatePropagation();
              }
            };
          } else if ($nav.hasClass('nav-pf-secondary-nav')) {
            onClickFn = function (event) {
              var $this = $(this), $tertiaryItem, $primaryItem;
                  setActiveItem($item);
                $primaryItem = $item.parents('.list-group-item');
                $tertiaryItem = $item.find('.nav-pf-tertiary-nav > .list-group > .list-group-item').eq(0);
                setActiveItem($tertiaryItem);
            };
          } else if ($nav.hasClass('nav-pf-tertiary-nav')) {
            // Set tertiary nav active item on click
            onClickFn = function (event) {
              if (inMobileState()) {
                updateMobileMenu();
                navElement.removeClass('show-mobile-nav');
              }
              updateSecondaryMenuDisplayAfterSelection();
              if (handleSelection) {
                setActiveItem($item);
                // Don't process the click on the item
                event.stopImmediatePropagation();
              }
            };
          }

          // register event handler
          $item.on('click.pf.secondarynav.data-api', onClickFn);
      },
      self = {
        hideMenu: function () {
          handleResize = false;
          enterMobileState();
        },
        showMenu: function () {
          handleResize = true;
          exitMobileState();
        },
        isVisible: function () {
          return handleResize;
        }
    if (!$.fn.setupVerticalNavigation.self) {
      $.fn.setupVerticalNavigation.self = self;
      //Listen for the window resize event and collapse/hide as needed
      $(window).on('resize', function () {
        checkNavState();
        enableTransitions();
      });
      init(handleItemSelections);
    }
    return $.fn.setupVerticalNavigation.self;
// PatternFly pf-list
(function ($) {
  'use strict';

  $.fn.pfList = function () {
    function init (list) {
      // Ensure the state of the expansion elements is consistent
      list.find('[data-list=expansion], .list-pf-item, .list-pf-expansion').each(function (index, element) {
        var $expansion = $(element),
          $collapse = $expansion.find('.collapse').first(),
          expanded = $collapse.hasClass('in');
        updateChevron($expansion, expanded);
        if ($expansion.hasClass('list-pf-item')) {
          updateActive($expansion, expanded);
        }
      });
      list.find('.list-pf-container').each(function (index, element) {
        var $element = $(element);
        // The toggle element is the element with the data-list=toggle attribute
        // or the entire .list-pf-container as a fallback
        var $toggles = $element.find('[data-list=toggle]');
        $toggles.length || ($toggles = $element);
        $toggles.on('keydown', function (event) {
          if (event.keyCode === 13 || event.keyCode === 32) {
            toggleCollapse(this);
            event.stopPropagation();
            event.preventDefault();
          }
        });
        $toggles.on('click', function (event) {
          toggleCollapse(this);
          event.stopPropagation();
          event.preventDefault();
        });
      });
    }

    function toggleCollapse (toggle) {
      var $toggle, $expansion, $collapse, expanded, $listItem;
      $toggle = $(toggle);
      // Find the parent expansion of the toggle
      $expansion = $toggle.parentsUntil('.list-pf', '[data-list=expansion]').first();
      $expansion.length || ($expansion = $toggle.closest('.list-pf-item, .list-pf-expansion'));

      // toggle the "in" class of its  first .collapse child
      $collapse = $expansion.find('.collapse').first();
      $collapse.toggleClass('in');

      // update the state of the expansion element
      updateChevron($expansion, $collapse.hasClass('in'));
      $listItem = $expansion.closest('.list-pf-item');
      updateActive($listItem, $listItem.find('.collapse').first().hasClass('in'));
    }

    function updateActive ($listItem, expanded) {
      // Find the closest .list-pf-item of the expansion, and set its "active" class
      if (expanded) {
        $listItem.addClass('active');
      } else {
        $listItem.removeClass('active');
      }
    }

    function updateChevron ($expansion, expanded) {
      var $chevron = $expansion.find('.list-pf-chevron .fa').first();
      if (expanded) {
        $chevron.removeClass('fa-angle-right');
        $chevron.addClass('fa-angle-down');
      } else {
        $chevron.addClass('fa-angle-right');
        $chevron.removeClass('fa-angle-down');
      }
    }

    init(this);

    return this;
  };
}(jQuery));