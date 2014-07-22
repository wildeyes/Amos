// ==UserScript==
// @name       Amos
// @namespace  https://github.com/wildeyes
// @version    0.1.0
// @description Add features to Trello - UserScript (use w/ TamperMonkey / GreaseMonkey)
// @match      http*://trello.com/*
// @grant none
// @copyright  2014+, XWILDEYES
// ==/UserScript==

window.lstchklst = [];

(function(history) {
  var pushState = history.pushState;
  history.pushState = function(state) {
    if (typeof history.onpushstate == "function") {
      history.onpushstate({
        state: state
      });
    }

    handler();

    return pushState.apply(history, arguments);
  }
})(window.history);

handler = function(e) {
  var card_id_expr = window.location.href.match(/c\/\w+\/(\d+)/),
    board_id_expr = window.location.href.match(/b\/\w+\/(\w+)/),
    board_id = !board_id_expr ? 0 : board_id_expr[board_id_expr.length - 1],
    card_id = !card_id_expr ? 0 : card_id_expr[card_id_expr.length - 1],
    lst = window.lstchklst,
    id = 0,
    $card = null,
    $last = null

  if (card_id) {

    lst[id] = $(".checklist-item:not('.checklist-item-state-complete')")
      .find(".checklist-item-details-text")
      .eq(0)
      .text()
    $card = $(".list-card-details:contains('" + card_id + "')").eq(0)
    $last = $card.find(".lstchklst")
    if ($last.length) {
      $last.text(lst[id])
    } else {

      $last = $("<span>" + lst[id] + "</span>")
        .addClass("lstchklst badge-text")
        .css("margin-left", "5px")
        .appendTo($card.find(".badge").last())
      //               .addClass("lstchklst badges badge-text")
      //               .css("margin-left","5px")
      //               .appendTo($card.find("list-card-details clearfix").eq(0))

    }
    console.log($last)
  } else if (board_id) {
    //$(".list-card-details:contains(" + board_id + ")")
  }
};
history.p
//= window.sup;

//console.log("Trello Last Checklist Item Loaded!")
"Trello Last Checklist Item Loaded!"