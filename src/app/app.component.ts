import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

    // $('.form-control-chosen').chosen();
    $('.form-control-chosen').chosen({
      allow_single_deselect: true
    });
    $('.form-control-chosen-required').chosen({
      allow_single_deselect: false
    });
    $('.form-control-chosen-optgroup').chosen();
    // Clickable optgroup add class
    $(function () {
      $('[title="clickable_optgroup"]').addClass('chosen-container-optgroup-clickable');
    });
    // Clickable optgroup
    $(document).on('click', '[title="clickable_optgroup"] .group-result', function () {
      // tslint:disable-next-line:prefer-const
      let unselected = $(this).nextUntil('.group-result').not('.result-selected');
      if (unselected.length) {
        unselected.trigger('mouseup');
      } else {
        $(this).nextUntil('.group-result').each(function () {
          $('a.search-choice-close[data-option-array-index="' + $(this).data('option-array-index') + '"]').trigger('click');
        });
      }
    });
  }

}
