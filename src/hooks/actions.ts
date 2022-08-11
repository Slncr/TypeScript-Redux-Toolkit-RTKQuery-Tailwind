import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { gitgubActions } from "../store/github/github.slice"


const actions = {
    ...gitgubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}