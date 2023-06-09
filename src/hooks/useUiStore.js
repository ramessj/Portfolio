import { useDispatch, useSelector } from "react-redux"
import { changeLang } from "../redux/uiSlice";


export const useUiStore = () => {
	const dispatch = useDispatch();
	
	const lang = useSelector(state => state.ui);

	
	const onSetLang = (newLang = 'EN') => {

		

	
		dispatch(changeLang(newLang))


	}

	return{
		lang,

		onSetLang
	}
}