/******************************************************************************/
/* model:  untuk model sendiri anda dapat menggunakan sendiri dengan cara menambahkan model yang kalian miliki
/*         ke dalam folder models lalu meletakkan path-nya pada properti role 
/*  role:  letakkan path dari file [nama_model].model.json kalian
/*         file [nama_model] juga dapat ber-ekstensi .model.json, .model2.json, atau .model3.json                             
/* scale:  untuk mengubah besar ukuran model yang akan ditampilkan
/******************************************************************************/
new Live2dLoader([
    {
      width: window.innerWidth,
      height: window.innerHeight,
      left: "0px",
      bottom: "0px",
      // role: "assets/model/huohuo/huohuo.model3.json",
      role: "assets/model/HoshinoAi/Hoshino_Ai.model3.json",
      opacity: 1,
      scale: 0.1,
      mobile: true,
      draggable: true,
    },
  ]);

/******** END OF FILE *********************************************************/