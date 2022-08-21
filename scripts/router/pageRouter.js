function pageRouter(view, event) {
    console.log(view, event)
    if(event === "display")
    {
        $(function(){
            $(`#${view}`).load(`../../views/${view}/${view}.html`);
            $(`#${view}`).show();  
        });

        
    }
    else if(event === "remove")
    {
        $(function(){
            $(`#${view}`).hide(); 
        });
    }
    
}