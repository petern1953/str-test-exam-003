# str-test-exam-003
## JS-task
### task01-algorithm
const customerFilter = (list, name, rating) => {
    return list.filter( c => c.name.includes(name) && c.rating >= rating )
        .map( c => c.name );
};
### task02-dom
function changeElements() {
    document.querySelectorAll('.example').forEach( e => {
        e.style.backgroundColor = 'red';
        e.style.fontStyle = 'italic';
    });
}
## Angular
- model: customer, service: nettuts
- Observable, CRUD, app-routing.module: simplest routing,
- app.component: <router-outlet></router-outlet>
### page: 
- home (list page) -- routerLink (save button), onDelete() (delete button)
- create (edit page) -- ngSubmit, onCreate() (+ button)
