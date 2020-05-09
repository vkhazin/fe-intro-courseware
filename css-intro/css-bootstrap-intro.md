  

## Introduction to Bootstrap

Bootstrap is a open source tool kit for developing responsive mobile first applications using CSS/HTML and JS. [https://getbootstrap.com/](https://getbootstrap.com/)

To add bootstrap to your project just add the link to your html page.
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```  
Bootstrap provides common CSS styles to style your pages.

Tables are very common HTML elements, bootstrap provides many classes to style tables
e.g. class table,

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John</td>
      <td>Doe</td>
      <td>john.doe@apple.com</td>
    </tr>
   <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>john.doe@apple.com</td>
    </tr>
  </tbody>
</table>

We can also invert colors using .table-dark class, using .table-striped class will create zebra like table, `.table-hover` to enable a hover state on table rows within a `<tbody>`.

You can learn more about other descendant selectors [https://getbootstrap.com/docs/4.4/content/tables/]