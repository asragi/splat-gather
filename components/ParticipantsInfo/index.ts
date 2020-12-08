import { connect } from "../connect";
import { ParticipantsInfoPresenter } from "./presenter";
import { ParticipantsInfoView } from "./view";

export const ParticipantsInfo = connect(ParticipantsInfoPresenter, ParticipantsInfoView);
