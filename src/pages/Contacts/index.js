import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { useContacts } from './useContacts'
import { ContactsTable } from './ContactsTable'
import { ToggleDataViewMode } from './ToggleDataViewMode'
import { useDataViewMode } from './useDataViewMode'
import Box from '@material-ui/core/Box'
import { DATA_VIEW_MODE } from './ContactsTable/constans'

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(4),
		},
		headContainer: {
			marginBottom: theme.spacing(3),
		}
	})
)

export const Contacts = () => {
	const classes = useStyles()
	const contacts = useContacts()
	const [dataViewMode, setDataViewMode] = useDataViewMode()

	return (
		<Container className={classes.root}>
			<Grid container>
				<Grid item xs={12} className={classes.headContainer}>
					<Box display="flex" justifyContent="space-between">
						<Typography variant="h4" component="h1">
							Contacts:
						</Typography>
						<ToggleDataViewMode
							dataViewMode={dataViewMode}
							setDataViewMode={setDataViewMode}
						/>
					</Box>
				</Grid>
				<Grid item xs={12}>
					{(() => {
						if (contacts.isLoading) {
							return <CircularProgress />
						}
						if (contacts.isError) {
							return <div> ...error</div>
						}

						if (dataViewMode === DATA_VIEW_MODE.TABLE) {
							return <ContactsTable data={contacts.data} />
						}
						if (dataViewMode === DATA_VIEW_MODE.GRID) {
							return <div>grid</div>
						}

						return null
					})()}
				</Grid>
			</Grid>
		</Container>
	)
}

