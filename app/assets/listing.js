$('.filters-btn').click(function () {
  var filtersWp = $('.filters-wp');
  filtersWp.toggleClass('filters-wp-visible');
});

$('.title-expander-wp').click(function () {
  var expander = $(this);
  var icon = $(this).find('.filter-expanded-icon');
  var parentNode = $(expander[0].parentElement);
  var nestedList = parentNode.find('.second-level-filter');

  nestedList.toggleClass('second-level-visible');

  if(icon.hasClass('fa-plus')){
    icon.removeClass('fa-plus');
    icon.addClass('fa-minus');
  }else {
    icon.removeClass('fa-minus');
    icon.addClass('fa-plus');
  }
});

$('.single-filter').click(function () {
  $(this).toggleClass('filter-active');
});

$('.type-filter').click(function () {
  $(this).toggleClass('filter-active');
});

$('.clear-filters-block').click(function () {
  var filtersWp = $(this).parent();
  var activeFilters = filtersWp.find('.filter-active');
  activeFilters.removeClass('filter-active');
});
