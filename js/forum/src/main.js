/*
* This file is part of flarum-latex.
*
* (c) Matteo Pompili <matpompili@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

app.initializers.add('matpompili-flarum-latex', function() {
  extend(DiscussionPage.prototype, 'view', function(vdom) {
    //vdom.children.push('<script>alert("test");</script>');
    renderMathInElement(document.body);
  });
});
