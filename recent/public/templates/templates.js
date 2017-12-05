(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main class=\"error-container\">\r\n  <h2>404</h2>\r\n  <h3>Woops!  We couldn't find that page.</h3>\r\n</main>\r\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\r\n\r\n  <div class=\"header-image-container\">\r\n    <img src=\"/benny.jpg\" alt=\"Benny logo\">\r\n  </div>\r\n\r\n  <h1 class=\"site-title\"><a href=\"/\">Benny's List</a></h1>\r\n\r\n</header>\r\n";
},"useData":true});
templates['layout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Benny's List</title>\r\n\r\n    <!-- This is a 3rd-party stylesheet to make available the font families to be used for this page. -->\r\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:100\" rel=\"stylesheet\">\r\n\r\n    <!-- This is a 3rd-party stylesheet to include Font Awesome icons: http://fontawesome.io/ -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" media=\"screen\">\r\n\r\n    <link rel=\"stylesheet\" href=\"/style.css\">\r\n\r\n    <script src=\"/index.js\" charset=\"utf-8\" defer></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.runtime.min.js\"></script>\r\n    <script src=\"/templates/templates.js\"></script>\r\n  </head>\r\n  <body>\r\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n  </body>\r\n\r\n</html>\r\n";
},"usePartial":true,"useData":true});
templates['newPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\" data-city=\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "\" data-condition=\""
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data}) : helper)))
    + "\">\r\n   <div class=\"post-contents\">\r\n     <div class=\"post-image-container\">\r\n       <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\r\n     </div>\r\n     <div class=\"post-info-container\">\r\n       <a href=\"#\" class=\"post-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"post-price\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"post-city\">("
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ")</span>\r\n     </div>\r\n   </div>\r\n </div>\r\n";
},"useData":true});
templates['post'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"post\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\" data-city=\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "\" data-condition=\""
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data}) : helper)))
    + "\">\r\n       <div class=\"post-contents\">\r\n         <div class=\"post-image-container\">\r\n           <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\r\n         </div>\r\n         <div class=\"post-info-container\">\r\n           <a href=\"#\" class=\"post-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"post-price\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"post-city\">("
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ")</span>\r\n         </div>\r\n       </div>\r\n     </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main class=\"content\">\r\n  <aside class=\"filter-container\">\r\n\r\n    <h2>Filters</h2>\r\n\r\n    <div class=\"filter-input-container\">\r\n      <label for=\"filter-text\" class=\"filter-input-label\">Text</label>\r\n      <input type=\"text\" name=\"filter-text\" id=\"filter-text\" class=\"filter-input\">\r\n    </div>\r\n\r\n    <div class=\"filter-input-container\">\r\n      <label for=\"filter-min-price\" class=\"filter-input-label\">Price</label>\r\n      <input type=\"number\" name=\"filter-min-price\" id=\"filter-min-price\" class=\"filter-input\" placeholder=\"min\">\r\n      <input type=\"number\" name=\"filter-max-price\" id=\"filter-max-price\" class=\"filter-input\" placeholder=\"max\">\r\n    </div>\r\n\r\n    <div class=\"filter-input-container\">\r\n      <label for=\"filter-city\">City</label>\r\n      <select id=\"filter-city\" class=\"filter-input\" name=\"filter-city\">\r\n        <option selected value=\"\">Any</option>\r\n        <option>Corvallis</option>\r\n        <option>Albany</option>\r\n        <option>Eugene</option>\r\n        <option>Portland</option>\r\n        <option>Salem</option>\r\n        <option>Bend</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"filter-input-container\">\r\n      <fieldset id=\"filter-condition\" class=\"filter-fieldset\">\r\n        <legend>Condition</legend>\r\n        <div>\r\n          <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-new\" value=\"new\">\r\n          <label for=\"filter-condition-new\">New</label>\r\n        </div>\r\n        <div>\r\n          <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-excellent\" value=\"excellent\">\r\n          <label for=\"filter-condition-excellent\">Excellent</label>\r\n        </div>\r\n        <div>\r\n          <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-good\" value=\"good\">\r\n          <label for=\"filter-condition-good\">Good</label>\r\n        </div>\r\n        <div>\r\n          <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-fair\" value=\"fair\">\r\n          <label for=\"filter-condition-fair\">Fair</label>\r\n        </div>\r\n        <div>\r\n          <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-poor\" value=\"poor\">\r\n          <label for=\"filter-condition-poor\">Poor</label>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n\r\n    <button id=\"filter-update-button\" class=\"action-button\">Update</button>\r\n\r\n  </aside>\r\n\r\n  <section id=\"posts\">\r\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </section>\r\n\r\n</main>\r\n\r\n<button type=\"button\" id=\"sell-something-button\"><i class=\"fa fa-plus\"></i></button>\r\n\r\n<div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n<div id=\"sell-something-modal\" class=\"hidden\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <div class=\"modal-header\">\r\n      <h3>Sell something on Benny's List</h3>\r\n      <button type=\"button\" id=\"modal-close\" class=\"modal-hide-button\">&times;</button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n\r\n      <div class=\"post-input-element\">\r\n        <label for=\"post-text-input\">Item description</label>\r\n        <input type=\"text\" id=\"post-text-input\"></input>\r\n      </div>\r\n\r\n      <div class=\"post-input-element\">\r\n        <label for=\"post-photo-input\">Photo URL</label>\r\n        <input type=\"text\" id=\"post-photo-input\">\r\n      </div>\r\n\r\n      <div class=\"post-input-element\">\r\n        <label for=\"post-price-input\">Selling price ($)</label>\r\n        <input type=\"number\" id=\"post-price-input\">\r\n      </div>\r\n\r\n      <div class=\"post-input-element\">\r\n        <label for=\"post-city-input\">City</label>\r\n        <input type=\"text\" id=\"post-city-input\">\r\n      </div>\r\n\r\n      <div class=\"post-input-element\">\r\n        <fieldset id=\"post-condition-fieldset\" class=\"post-fieldset\">\r\n          <legend>Condition</legend>\r\n          <div>\r\n            <input type=\"radio\" name=\"post-condition\" id=\"post-condition-new\" value=\"new\" checked>\r\n            <label for=\"post-condition-new\">New</label>\r\n          </div>\r\n          <div>\r\n            <input type=\"radio\" name=\"post-condition\" id=\"post-condition-excellent\" value=\"excellent\">\r\n            <label for=\"post-condition-excellent\">Excellent</label>\r\n          </div>\r\n          <div>\r\n            <input type=\"radio\" name=\"post-condition\" id=\"post-condition-good\" value=\"good\">\r\n            <label for=\"post-condition-good\">Good</label>\r\n          </div>\r\n          <div>\r\n            <input type=\"radio\" name=\"post-condition\" id=\"post-condition-fair\" value=\"fair\">\r\n            <label for=\"post-condition-fair\">Fair</label>\r\n          </div>\r\n          <div>\r\n            <input type=\"radio\" name=\"post-condition\" id=\"post-condition-poor\" value=\"poor\">\r\n            <label for=\"post-condition-poor\">Poor</label>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" id=\"modal-cancel\" class=\"modal-hide-button action-button\">Cancel</button>\r\n      <button type=\"button\" id=\"modal-accept\" class=\"action-button\">Create Post</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();