/*ESSE CODIGO RODA NO NAVEGADOR DO CLIENTE*/
(function(){
    //let reftabela = document.getElementById("clientes");
    $("#clientes").on("click",".js-delete", function(){
        let botaoclicado = $(this); //$(this) retorna ref do botão
        $("#btnsim").attr("data-id", botaoclicado.attr("data-id"));
        $("#meumodal").modal("show");
    });
    $("#brncancelar").on("ckick", function(){
        $("#meumodal").modal("hide");
    });
    $("#btnsim").on("click", function(){
        let botaoSim = $(this);
        let id = botaoSim.attr("data-id");
        $.ajax({
            url: "/clientes/delete/" + id,
            method: "GET",
            success: function(){
                window.location.href="/clientes";
            }
        });
    });
})();