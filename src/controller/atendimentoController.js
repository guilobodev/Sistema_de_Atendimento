import sequelize from "../config/connection.js";
import Atendimento from "../models/atendimentoModel.js";

export const CreateAtendimento = async (req, res) => {
  try {
    const novoAtendimento = await Atendimento.create(req.body);
    res.status(201).json(novoAtendimento);
  } catch (error) {
    res.status(500).json("erro ao criar atendimento, contate o responsável");
    console.error("erro ao criar: ", error);
  }
};
export const getAtendimentos = async (req, res) => {
  try {
    const todosAtendimentos = await Atendimento.findAll({
      include: [
        {
          model: sequelize.models.User,
          as: "user",
          attributes: ["nome"],
        },
        {
          model: sequelize.models.Service,
          as: "service",
          attributes: ["nome"],
        },
        {
          model: sequelize.models.Canal,
          as: "canal",
          attributes: ["nome"],
        },
      ],
    });
    res.status(200).json(todosAtendimentos);
  } catch (error) {
    res
      .status(500)
      .json("erro ao buscar os atendimentos, contate o responsável");
    console.error("erro ao buscar: ", error);
  }
};

export const putAtendimento = async (req, res) => {
  try {
    const [update] = await Atendimento.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(update);
  } catch (error) {
    res
      .status(500)
      .json("erro ao atualizar atendimento, contate o responsável");
    console.error("erro ao atualizar: ", error);
  }
};

export const deleteAtendimento = async (req, res) => {
  try {
    const atendimento = await Atendimento.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(atendimento);
  } catch (error) {
    res.status(500).json("erro ao deletar atendimento, contate o responsável");
    console.error("erro ao deletar: ", error);
  }
};
