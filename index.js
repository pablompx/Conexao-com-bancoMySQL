const express = require('express');
const sequelize = require('./database');
const Aluno = require('./models/Aluno');

const app = express();
app.use(express.json());

app.post('/alunos', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    console.log(email, nome);
    try {
        const aluno = await Aluno.create({
            nome,
            email
        })
        res.status(201).json({
            mensagem: "aluno cadastrado com sucesso",
            aluno
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensagem: "erro interno no servidor!" })
    }
});

app.get('/alunos', async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        res.json(alunos)
    } catch (err) {
        console.error(err);
        res.status(500).json({
            mensagem: "erro ao buscar alunos"
        });
    }
});

app.get('/alunos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const aluno = await Aluno.findByPk(id)
        if (!aluno) {
            return res.status(404).json({
                mensagem: "aluno não encontrado"
            })
        }
        res.json({
            aluno
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            mensagem: "erro ao buscar aluno"
        });
    }
});

app.put('/alunos/:id', async(req, res)=>{
    const id = req.params.id;
    const nome = req.body.nome;
    try{
        const aluno = await Aluno.findByPk(id);
        const nomeAntigo = aluno.nome
        if(!aluno){
            return res.status(404).json({
                mensagem:"aluno não encontrado!"
            })
        }
        aluno.nome = nome;
        await aluno.save();
        res.json({
            mensagem:"Aluno Atualizado!",
            nomeAntigo:nomeAntigo,
            novoNome:aluno.nome
        })

    }catch(err){ 

        console.error(err);
        res.status(500).json({
            mensagem: "erro ao atualizar aluno!"

        });
    }   

});

app.delete('/alunos/:id', async(req, res)=>{
    const id = req.params.id;
    try{
        const aluno = await Aluno.findByPk(id);
        if(!aluno){
            return res.status(404).json({
                mensagem:"aluno removido com sucesso!"
            })
        }
        await aluno.destroy();
        

    }catch(err){
        
        console.error(err);
        res.status(500).json({
            mensagem: "erro ao excluir Aluno!"

        });
    }

})


app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});

/*
** npm install express nodemon mysql2 sequelize
*/