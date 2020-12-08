import { connect } from "../connect";
import { StagesInfoPresenter } from "./presenter";
import { StagesInfoView } from "./view";

export const StagesInfo = connect(StagesInfoPresenter, StagesInfoView);
