import { useQuery } from "@apollo/react-hooks";
import React from 'react';
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";

import { SEARCH_FOR_REPOS } from "./queries";
import Repository from "./components/Repository";


const useStyles = makeStyles({
    note: {
        marginTop: '1rem',
        textAlign: 'center',
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '1rem'
    }
});

const RepositoryList = ({ searchTerm }) => {
    const classes = useStyles();
    const { data, loading, error } = useQuery(SEARCH_FOR_REPOS);
    console.log(data);
    if (loading) {
        return (
            <div className={classes.spinnerContainer}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <Typography
                variant={'overline'}
                className={classes.note}
                component={'div'}
                color={'error'}
            >
                {error}
            </Typography>
        )
    }
    if(!data) return null;
    return data && data.search.edges.map(({node}) => {
       return  <Repository repo={node}/>
    });
};

export default RepositoryList;