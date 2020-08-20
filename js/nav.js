/*
============================================
; Title: nav.js | week 8 (update)
; Author: Aaron Wilson
; Instructor: Kevin Imhoff
; Date: 17 August 2020
; Description: JQuery Code GoWilder Website
;===========================================
*/

// I created all Jquery code here!

$(document).ready(function() {

  // Hide all other sections.
  $('.main #home-area').show().siblings().hide()
  $('.main-menu ul li a').on('click', function(e) {

    var thisLink = $(this).attr('href')

		// Show/Hide Tabs
		$('.main ' + thisLink).show().siblings().hide()

		// Change/remove current tab to active
		$(this).parent('li').addClass(' active').siblings().removeClass(' active')
  }) 
})
