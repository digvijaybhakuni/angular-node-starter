#Momkey Book
-------
###### Anuglar Demo Project By Digvijay

##KeyNote 1,

- You use expressions to return values for a template.
-You can use expressions to output the current values of variables from the scope, which are valid for the template in its current state.
- Expressions are subject to two-way data binding. This means they will be re-evaluated when the value of the scope variable changes.
- Whenever possible, you should choose the ngBind or ngBindTemplate directive over expressions for performance reasons.
- You can use the ngHref directive to create a hyperlink that contains an expression. AngularJS then ensures that the link is active only when the template is processed and the corresponding expression evaluated.
- With $routeProvider you can configure application routes in a config() block.
- The ngView directive is used to annotate an HTML element to tell the framework which route template should be loaded.
- You use E2E tests to script simulated user behavior for your application and to formulate certain expectations based on the DOM.
- Angular comes with its own test framework called ngScenario.

##KeyNote 2,
Using the filter filter you can filter an array based on certain criteria. For example, you can implement a client-side search feature.
In addition to supporting full text search, you can control thoroughly how a data collection will be filtered.
With an optional comparator you can define filtering logic for the compare operation.
Used in a template:
    `ng_repeat_expression | filter:predicate[:comparator]`
Invoked programmatically with the $filter service:
    `$filter('filter')(array, predicate[, comparator]);`
