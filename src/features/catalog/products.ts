export type Category="Niños"|"Mascotas"|"Recuerdos"|"Empresas";
export type Product={id:string;name:string;category:Category;description:string;emoji:string};
export const categories:("Todos"|Category)[]=["Todos","Niños","Mascotas","Recuerdos","Empresas"];
export const products:Product[]=[
{id:"kids-emergency",name:"Llavero NFC Niños",category:"Niños",description:"Contacto de emergencia accesible con un toque.",emoji:"🧒"},
{id:"pet-safe",name:"Llavero NFC Mascotas",category:"Mascotas",description:"Datos de contacto para ayudar a una mascota perdida a volver a casa.",emoji:"🐾"},
{id:"memory",name:"Recuerdo que habla",category:"Recuerdos",description:"Conecta un recuerdo físico con fotos, audio o video digital.",emoji:"✨"},
{id:"business",name:"NFC para Empresas",category:"Empresas",description:"Soluciones NFC personalizadas para procesos y atención.",emoji:"🏢"}];