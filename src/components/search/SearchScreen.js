import React from 'react'
import queryString from "query-string";
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';



export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const {q = ''} =  queryString.parse(location.search);

    const  [ formValues, handleInputChange]  = useForm({
        searchText: q
    });
    
    const { searchText } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    const heroesFilter = getHeroesByName( searchText );

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-4">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            autoComplete='off'
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        heroesFilter.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>
            
        </div>
    )
}
