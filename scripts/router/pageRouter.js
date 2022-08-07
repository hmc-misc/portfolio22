function pageRouter(view, event) {
    if(event === "display")
    {
        $(function(){
            $(`#${view}`).load(`../../views/${view}/${view}.html`); 
        });
    }
    else if(event === "remove")
    {
        $(function(){
            $(`#${view}`).remove(); 
        });
    }
    
}