import { useCallback } from 'react'
import PropTypes from 'prop-types'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { DATA_VIEW_MODE } from '../ContactsTable/constans'


export const ToggleDataViewMode = ({ dataViewMode, setDataViewMode }) => {
    const handleChangeViewMode = useCallback((_, nextView) => {
        setDataViewMode(nextView)
    }, [setDataViewMode])

    return (
        <ToggleButtonGroup
            size="small"
            exclusive
            value={dataViewMode}
            onChange={handleChangeViewMode}
        >
            <ToggleButton
                value={DATA_VIEW_MODE.GRID}
                aria-label={DATA_VIEW_MODE.GRID}
            >
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton
                value={DATA_VIEW_MODE.TABLE}
                aria-label={DATA_VIEW_MODE.TABLE}
            >
                <ViewListIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
ToggleDataViewMode.propsTypes = {
    dataViewMode: PropTypes.oneOf([DATA_VIEW_MODE.GRID, DATA_VIEW_MODE.TABLE]).isRequired,
    setDataViewMode: PropTypes.func.isRequired,
}