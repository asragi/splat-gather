import { ButtonComponent } from "../Button";
import { connect } from "../connect";
import { ParticipantsInfoPresenter } from "./presenter";
import { ParticipantsInfoView as _View, ParticipantsInfoViewProps } from "./view";

const renderJoinButton = ({onClick, text}) => <ButtonComponent onClick={onClick} text={text} />
const ParticipantsInfoView = (props: ParticipantsInfoViewProps) => <_View {...props} renderJoinButton={renderJoinButton}/>
export const ParticipantsInfo = connect(ParticipantsInfoPresenter, ParticipantsInfoView);
