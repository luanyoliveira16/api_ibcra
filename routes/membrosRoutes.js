import { Router } from 'express';
import MemberRepository from "../repository/MemberRepository.js";

const router = Router();

router.get('/', async(req, res) => {
    const result = await new MemberRepository().getAll();
    res.status(200).send(result);

})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const result = await new MemberRepository().getMember(id);
    res.status(200).send(result)
})

router.post('/', async (req, res) => {
    const { nome, data_nascimento, telefone, endereco, data_entrada, funcao, email} = req.body;

    // if (!nome || !data_nascimento || !telefone || !endereco) {
    //     return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    // }

    const valuesArray = [nome, data_nascimento, telefone, endereco, data_entrada, funcao, email, new Date()];

    try {
        await new MemberRepository().insertMember(valuesArray);
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// router.post('/', async (req, res)=>{
//     const { body } = req;
//     const columnsArray = ['nome', 'data_nascimento', 'telefone', 'endereco', 'data_entrada', 'funcao', 'email', 'data_cadastro', 'foto']
//     const valuesArray = columnsArray.reduce((acc, columnName) => {
//         acc.push(body[columnName]);
//         return acc;
//     }, [])
//     await new MemberRepository().insertMember(valuesArray)
//     res.status(200).send();
// })

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    // Validação do ID
    if (!id || isNaN(id)) {
        return res.status(400).send({ error: 'Invalid ID' });
    }

    // Validação dos dados de entrada
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        return res.status(400).send({ error: 'Invalid data' });
    }

    try {
        const result = await new MemberRepository().updateMember(parseInt(id, 10), data);
        res.status(200).send({ message: 'Member updated successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    // Validação do ID
    if (!id || isNaN(id)) {
        return res.status(400).send({ error: 'Invalid ID' });
    }

    try {
        await new MemberRepository().deleteMember(parseInt(id, 10));
        res.status(200).send({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});





export default router;
