# Getting Started VueJS

### Quick Start

Use Live Server : [Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### [:open_file_folder: The Vue Instance ](https://github.com/khairul-abdi/khairul-abdi-Getting_Started_VueJS/tree/master/Intro%20to%20Vue.js/1.%20The%20Vue%20Instance)

#### What have we learned?

- How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage.
- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- The Vue instance’s data can be displayed using the mustache-like syntax `{{ }}` called an expression.
- Vue is reactive

### [:open_file_folder: Attribute Binding ](https://github.com/khairul-abdi/khairul-abdi-Getting_Started_VueJS/tree/master/Intro%20to%20Vue.js/2.%20Attribute%20Binding)

#### So what have we learned?

- Data can be bound to HTML attributes.
- Syntax is `v-bind:` or `:` for short.
- The attribute name that comes after the `:` specifies the attribute we’re binding data to.
- Inside the attribute’s quotes, we reference the data we’re binding to.

### [:open_file_folder: Conditional Rendering ](https://github.com/khairul-abdi/Getting_Started_VueJS/tree/master/Intro%20to%20Vue.js/3.%20Conditional%20Rendering)

#### What’d we learn

- There are Vue directives to conditionally render elements:
  - v-if
  - v-else-if
  - v-else
  - v-show
- If whatever is inside the directive’s quotes is truthy, the element will display.
- You can use expressions inside the directive’s quotes.
- V-show only toggles visibility, it does not insert or remove the element from the DOM.

### [:open_file_folder: List Rendering ](https://github.com/khairul-abdi/Getting_Started_VueJS/tree/master/Intro%20to%20Vue.js/4.%20List%20Rendering)

#### What’d we learn

- The v-for directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: v-for="item in items"
- We can loop over an array of objects and use dot notation to display values from the objects.
- When using v-for it is recommended to give each rendered element its own unique key.

### [:open_file_folder: Event Handling ](https://github.com/khairul-abdi/Getting_Started_VueJS/tree/master/Intro%20to%20Vue.js/5.%20Event%20Handling)

#### What’d we learn

- The v-on directive is used to allow elements to listen for events
- The shorthand for v-on is @
- You can specify the type of event to listen for:
  - click
  - mouseover
  - any other DOM event
- The v-on directive can trigger a method
- Triggered methods can take in arguments
- this refers to the current Vue instance’s data as well as other methods declared inside the instance

### [:open_file_folder: Class &Style Binding ](https://github.com/khairul-abdi/Getting_Started_VueJS/tree/master/Intro%20to%20Vue.js/6.%20Class%20&%20Style%20Binding)

#### What’d we learn

- Data can be bound to an element’s style attribute
- Data can be bound to an element’s class
- We can use expressions inside an element’s class binding to evaluate whether a class should appear or not
