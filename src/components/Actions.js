import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Rewind from './actions/Rewind';
import SuperLike from './actions/Superlike';

const Actions = ({person, modifySuperficialChoices}) => (
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike userId={person.id} modifySuperficialChoices={modifySuperficialChoices} />
    <Like userId={person.id} modifySuperficialChoices={modifySuperficialChoices} />
    <SuperLike userId={person.id} modifySuperficialChoices={modifySuperficialChoices} />
  </div>
)

export default Actions;
