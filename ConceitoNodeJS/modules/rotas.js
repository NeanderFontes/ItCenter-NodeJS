// Import módulo express:
const express = require("express");

// Inicialização do servidor express:
const app = express();

// Simulação de dados JSON para banco de dados:
let cursosInfo = [
    { "Curso": "Node", "Info": "Curso de Node" },
    { "Curso": "Java", "Info": "Curso de Java" },
    { "Curso": "JavaScript", "Info": "Curso de JavaScript" },
    { "Curso": "Mysql", "Info": "Curso de Mysql" }
]