const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

exports.criarUsuario = async (req, res) => {
    const { email, senha } = req.body;

    //Aplicação do prisma
    const usuario = await prisma.usuario.create({data: {email, senha}});
    res.status(201).json(usuario);
}

exports.login = async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await prisma.usuario.findFirst({where: {email, senha}});

    if (!usuario) {
        return res.status(401).json({ mensagem: 'login inválido!' });
    }
    res.json({usurarioId: usuario.id})
}
