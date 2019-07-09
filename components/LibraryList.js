import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{
    renderItem(library){   
        console.log('kita labava' + this.props);
        return <ListItem library={library} />;
    }

    render(){  
        return(
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        );
    }
}

//take global state object from redux store
//and provide them to our component as prop
const mapStateToProps = state => 
     ({ libraries: state.libraries });


//This connects the component to the state object of redux
export default connect(mapStateToProps)(LibraryList);

