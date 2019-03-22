
$(document).ready(function(){
  $('p').css('border-bottom','1px solid black');  //Tag
      $('.first').css('border-color', 'green')  //ID
      $('#special').css('background-color','blue')  //Class
      $('p.first small').css('background-color','#444444')  //可以有大到写的去指定object
      //$('.first').text('Lets learn jQuery')    //？？？？
      //console.log($('p.first').text)  //？？
      //$('.first').text('lets!!!!!') // add 文字在 里面 但不应该TEXT 应该在html 就跟下面这个一样
      $('.first').html('lets!!<em>lets!!!</em>') //请自己对比 两个文字的区别和 查看F12 Html的显示
      $('.first').prepend('Prepend lets!!<h2>Prepend lets!!!</h2>') //加东西在最后 Prepend
      $('.first').after('<small>Make Webpages interactive </small>') //加东西在整个tag的后面 所以有区别 After


      console.log($('#yourName').val())//输出 名字
      $('#yourName').val('Bob builder')//重新输入这个名字
      console.log($('p.first').text())//输出 整一坨text
/* attribute selectors */   //这个不知道是什么鬼
$('a[href="#1"]').css('background-color','tomato')
$('a[href^="#"]').css('color','green')   // 这个就是重点 ^ 这个东西就把所有包含#的全部都给找到和改
$('a[href*="google"]').css('font-weight','bold')   //在所有地方将 google这个东西找出来然后更改他。  特别提醒 所有的 .css 的意思并不是说文件后续名字，是后面的那个东西 是什么需要被改变。如果需要研究就看看前面的HTML


/*Animation Functions */
// $('.card::first').hide(400)  //??
// // $('.card:first').hide(400)
/* $('.card:first').delay(1000).hide(400).show(800, function (){
   alert('we\' re back')   //    \ 这个东西是告诉电脑这不是 结束，而是文字。 另外也可以使用 “”
})*/

$('.card').animate({ borderRadius: '20px'} , 400)  // 如果 用 {} 去表达的话， 而不是 ''  记得要将 元素的 - （横杠） 给拿走。 就好像 fontWeight


/*Attribute Method*/
$('img:first').attr('src','./img/image-5.jpg')

/*Class Methods*/
console.log($('img:first').hasClass('special'))  //查看有没有class这个东西
//
// $('img').removeClass('special')
// $('img').addClass('special')
$('img').toggleClass('special')  ///why is true

/*Events*/
$('img').on('click')  // on?

$('img').bind('click')  // bind?


$('img').click(function(){
  console.log($(this).attr('src'))      //this 就是我最终 点 的那个东西。 无论我点哪个img
$(this).toggleClass('special')
})



});
