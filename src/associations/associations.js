import User from "../models/userModel.js";
import Service from "../models/serviceModel.js";    
import Atendimento from "../models/atendimentoModel.js";
import Canal from "../models/canalModel.js";

User.hasMany(Atendimento, { foreignKey: "userId" });
Atendimento.belongsTo(User, { foreignKey: "userId" });

Canal.hasMany(Atendimento, { foreignKey: "canalId" });
Atendimento.belongsTo(Canal, { foreignKey: "canalId" });

Service.hasMany(Atendimento, { foreignKey: "serviceId" });
Atendimento.belongsTo(Service, { foreignKey: "serviceId" });

export default { User, Service, Atendimento, Canal };