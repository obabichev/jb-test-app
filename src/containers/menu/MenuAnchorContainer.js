import {connect} from 'react-redux';
import {MenuAnchorComponent} from '../../components/menu/MenuAnchorComponent/MenuAnchorComponent';
import {isAnchorSelectedSelector} from '../../selectors/navigation/navigation';

const mapStateToProps = (state, props) => ({
    isSelected: isAnchorSelectedSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({

});

export const MenuAnchorContainer = connect(mapStateToProps, mapDispatchToProps)(MenuAnchorComponent);
