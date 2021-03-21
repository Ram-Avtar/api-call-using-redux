import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchSuccess } from './storage/action/action';



const CompJs = (props) => {
    // dispatch(fetchSuccess)
    // const [info, setInfo] = useState({});


    const dispatch = useDispatch();
    const matche = useSelector(state => state.matchesData.matches);
    const loading = useSelector(state => state.matchesData.isFetching);

    useEffect(() => {
        dispatch(fetchSuccess('https://cricapi.com/api/matches/?apikey=gZNQ1TfHO9aecx2dIJJIKwtHdVl1'));

        // console.log("cricket info", cricket)
    }, [])

    return (


        <View style={styles.container}>

            {console.log("component data type ", typeof matche)}
            {console.log("component data ", matche)}
            {console.log("component data details infomation", matche.map(detail => detail.winner_team))}


            <Text style={{ color: 'white' }}>new app</Text>
            {/* {console.log("matche details ", info.matches.map((data) => (data.winner_team)))} */}
            {/* <ul>

                {info.matches.map((stResult) => (
                    <li
                        style={{ color: 'white' }}
                        key={stResult.date}
                    >
                        {stResult.winner_team}
                    </li>
                ))}

            </ul> */}
            <Button title='fetch' onPress={props.onFetchData} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
// const mapPropsToState = (state) => {
//     return {
//         info: state.matchesData.matches
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFetchData: () => dispatch(fetchSuccess())
//     }
// }
export default CompJs;
