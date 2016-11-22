/* Emoticons For Blogger Threaded Comments
 * By Ferry Bachtiar
 * Url: http://satu-untuk-semuanya.blogspot.com
 */
a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') { 
_str = b.item(i).innerHTML.replace(/:\)\)/gi, "<img alt='taunt' src='http://1.bp.blogspot.com/-mkLOPB8bbfY/U7w7Fwnr4gI/AAAAAAAADFc/FQBNPeUoUIE/s1600/taunt.gif' class='smiley'/>"); 
_str = _str.replace(/=d&gt;/gi, "<img alt='haah' src='http://2.bp.blogspot.com/-hqsm6wICoK0/U7w69QHrNrI/AAAAAAAADEE/WvXoyXTWtek/s1600/haah.gif' class='smiley'/>"); 
_str = _str.replace(/:d/gi, "<img alt='biggrin' src='http://2.bp.blogspot.com/--S-xMH1jML4/U7w61ZozNYI/AAAAAAAADC4/iOKg-mYKEro/s1600/biggrin.gif' class='smiley'/>"); 
_str = _str.replace(/:p/gi, "<img alt='tongue' src='http://3.bp.blogspot.com/--toExF2LIx0/U7w7HkgGyRI/AAAAAAAADF0/1iiv2Hq5nVw/s1600/tongue.gif' class='smiley'/>"); 
_str = _str.replace(/:\(\(/gi, "<img alt='cry2' src='http://2.bp.blogspot.com/-_efyUzrAMHI/U7w66Xj_I9I/AAAAAAAADDo/2n-fHoVUTqM/s1600/cry2.gif' class='smiley'/>"); 
_str = _str.replace(/:\)/gi, "<img alt='smile' src='http://4.bp.blogspot.com/-1uN11TDZE3A/U7w7E5YCPlI/AAAAAAAADFQ/TemPjHKwPwA/s1600/smile.gif' class='smiley'/>"); 
_str = _str.replace(/:\(/gi, "<img alt='hammer' src='http://2.bp.blogspot.com/-vLPVih41f3k/U7w6-An4i-I/AAAAAAAADEQ/Hab3fI42fO4/s1600/hammer.gif' class='smiley'/>"); 
_str = _str.replace(/:-\?/gi, "<img alt='think' src='http://4.bp.blogspot.com/-3_cjWFVUqlc/U7w7Gqxti5I/AAAAAAAADFo/ZVzpMdQY4tg/s1600/think.gif' class='smiley'/>"); 
_str = _str.replace(/d\(/gi, "<img alt='ouch' src='http://4.bp.blogspot.com/-K9m0ShzGplE/U7w7A6zKkxI/AAAAAAAADEw/RXaAGTIDmTM/s1600/ouch.gif' class='smiley'/>"); 
_str = _str.replace(/:-o/gi, "<img alt='shock' src='http://4.bp.blogspot.com/-9ruBSn2RDo4/U7w7ELSjf3I/AAAAAAAADFA/Lp2ouO0IEY8/s1600/shock.gif' class='smiley'/>"); 
_str = _str.replace(/:-f/gi, "<img alt='flowers' src='http://3.bp.blogspot.com/-JTkqUGwg8iQ/U7w67GRD-aI/AAAAAAAADDs/HWHhtvFdTIE/s1600/flowers.gif' class='smiley'/>");
_str = _str.replace(/:-ss/gi, "<img alt='unsure' src='http://1.bp.blogspot.com/-CcbG2D6HJr8/U7w7IXsmAwI/AAAAAAAADGA/gm5qn0B2Y-w/s1600/unsure.gif' class='smiley'/>"); 
_str = _str.replace(/b-\(/gi, "<img alt='threaten' src='http://4.bp.blogspot.com/-VUYHT3W1lxI/U7w7HJWCqoI/AAAAAAAADFs/cppT-z8wa6I/s1600/threaten.gif' class='smiley'/>"); 
_str = _str.replace(/h-\(/gi, "<img alt='confused' src='http://1.bp.blogspot.com/-Jx4Y1dW1UXQ/U7w64K7B3hI/AAAAAAAADDI/5uSWo76LljQ/s1600/confused.gif' class='smiley'/>"); 
_str = _str.replace(/g-\)/gi, "<img alt='good' src='http://1.bp.blogspot.com/-KB5QUTs9jkU/U7w681xBFqI/AAAAAAAADEA/HAENBjoDA1A/s1600/good.gif' class='smiley'/>"); 
_str = _str.replace(/5-\p/gi, "<img alt='beee' src='http://1.bp.blogspot.com/-3cCb0cPgP1o/U7w61FMQU3I/AAAAAAAADC0/z01rvb_f2Dw/s1600/beee.gif' class='smiley'/>"); 
_str = _str.replace(/y-\)/gi, "<img alt='happy' src='http://4.bp.blogspot.com/-3ygyklnfAUc/U7w6-34K-wI/AAAAAAAADEY/AmdkqBDvuRg/s1600/happy.gif' class='smiley'/>"); 
_str = _str.replace(/c-\)/gi, "<img alt='crazy' src='http://4.bp.blogspot.com/-vj6dYGvlJrU/U7w65j3CrfI/AAAAAAAADDg/pT2w-wbX9-M/s1600/crazy.gif' class='smiley'/>"); 
_str = _str.replace(/s-\)/gi, "<img alt='spiteful' src='http://3.bp.blogspot.com/-9RrC9EX2gO8/U7w7Fe_UY1I/AAAAAAAADFU/yRbU228GIXs/s1600/spiteful.gif' class='smiley'/>"); 
_str = _str.replace(/d-\)/gi, "<img alt='cool' src='http://1.bp.blogspot.com/-Ol_eZAvfRpc/U7w64EKTLsI/AAAAAAAADDU/QOeE-yAJrg4/s1600/cool.gif' class='smiley'/>");
_str = _str.replace(/w-\)/gi, "<img alt='laugh' src='http://4.bp.blogspot.com/-KWFKZFjKD30/U7w7AGhHPmI/AAAAAAAADEo/1vzLMMQHZA4/s1600/laugh.gif' class='smiley'/>"); 
_str = _str.replace(/:-\h/gi, "<img alt='hi2' src='http://2.bp.blogspot.com/-bh4OZCTe5vQ/U7w6_AomtzI/AAAAAAAADEc/wPOt6NiPA4w/s1600/hi+2.gif' class='smiley'/>"); 
_str = _str.replace(/:X/gi, "<img alt='give heart' src='http://3.bp.blogspot.com/-Cbv0nZUBFpg/U7w68f4omwI/AAAAAAAADD4/x_tuMVZn55w/s1600/give_heart.gif' class='smiley'/>"); 
_str = _str.replace(/:\-\*/gi, "<img alt='air kiss' src='http://3.bp.blogspot.com/-OsWUxxTH71Q/U7w61A55ltI/AAAAAAAADCw/xNwt_3tLo9M/s1600/air_kiss.gif' class='smiley'/>");
_str = _str.replace(/=\)\)/gi, "<img alt='rofl' src='http://3.bp.blogspot.com/-4KMg4Seo1rQ/U7w7DRI1OuI/AAAAAAAADE4/g0OFKImj2A0/s1600/rofl.gif' class='smiley'/>");
b.item(i).innerHTML = _str; 
} 
} 
}