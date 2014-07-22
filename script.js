// ==UserScript==
// @name       Amos
// @namespace  https://github.com/wildeyes
// @version    0.1.0
// @description Add features to Trello - UserScript (use w/ TamperMonkey / GreaseMonkey)
// @match      http*://trello.com/*
// @copyright  2014+, XWILDEYES
// ==/UserScript==

window.lstchklst = [];

window.onpopstate = history.onpushstate = function(e) {
  var card_id_expr = window.location.href.match(/c\/\w+\/(\d+)/),
    board_id_expr = window.location.href.match(/b\/\w+\/(\w+)/),
    board_id = !board_id_expr.length ? 0 : board_id_expr[board_id_expr.length - 1],
    card_id = !card_id_expr.length ? 0 : card_id_expr[card_id_expr.length - 1],
    lst = window.lstchklst

  if (card_id) {

    lst[id] = $(".checklist-item:not('.checklist-item-state-complete')")
      .find(".checklist-item-details-text")
      .eq(0)
      .text()

    $("<span>" + lst[id] + "</span>")
      .addClass("badge-text")
      .css("margin-left", "5px")
      .appendTo($(".list-card-details:contains('" + card_id + "')").find(".badge"))
  } else if (board_id) {
    //$(".list-card-details:contains(" + board_id + ")")
  }
};

//= window.sup;

//console.log("Trello Last Checklist Item Loaded!")
"Trello Last Checklist Item Loaded!"