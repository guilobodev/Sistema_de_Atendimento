import User from "../models/userModel.js";
import Service from "../models/serviceModel.js";    
import Atendimento from "../models/atendimentoModel.js";
import Canal from "../models/canalModel.js";

User.hasMany(Atendimento, { foreignKey: "userId", as: "atendimentos" });
Atendimento.belongsTo(User, { foreignKey: "userId", as: "user" });

Canal.hasMany(Atendimento, { foreignKey: "canalId", as: "atendimentos" });
Atendimento.belongsTo(Canal, { foreignKey: "canalId", as: "canal" });

Service.hasMany(Atendimento, { foreignKey: "serviceId", as: "atendimentos" });
Atendimento.belongsTo(Service, { foreignKey: "serviceId", as: "service" });

export default { User, Service, Atendimento, Canal };