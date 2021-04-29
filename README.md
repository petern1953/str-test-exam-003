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
Observable, CRUD, app-routing.module: simplest routing,
app.component: <router-outlet></router-outlet>
