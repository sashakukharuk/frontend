import React from 'react';
import './App.css';
import {Table} from "./Components/Table/Table";
import {IssueProvider} from "./State/Issue/IssueProvider";
import {FilterProvider} from "./State/Filter/FilterProvider";
import {Filter} from "./Components/Filter/Filter";
import {useEventEmitter} from "@umijs/hooks";
import {StepsProvider} from "./State/Steps/StepsProvider";

function App() {
    const followLink$ = useEventEmitter<string>()
    const applyFilter$ = useEventEmitter<string>()
    return <div className="App">
        <FilterProvider>
            <Filter applyFilter$={applyFilter$}/>
        </FilterProvider>
        <StepsProvider followLink$={followLink$}>
            <IssueProvider applyFilter$={applyFilter$}>
                <Table followLink$={followLink$}/>
            </IssueProvider>
        </StepsProvider>
    </div>
}

export default App;
