import React from 'react';
import Header from "../components/Header/Header";

/*const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <TextInput source="title" defaultValue="Hello, World!"/>
    </Filter>
);*/

const Users = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <div className="Users ui container segment">
                <table className="ui celled structured table">
                    <thead>
                    <tr>
                        <th rowSpan="2">Name</th>
                        <th rowSpan="2">Type</th>
                        <th rowSpan="2">Files</th>
                        <th colSpan="3">Languages</th>
                    </tr>
                    <tr>
                        <th>Ruby</th>
                        <th>JavaScript</th>
                        <th>Python</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Alpha Team</td>
                        <td>Project 1</td>
                        <td className="right aligned">2</td>
                        <td className="center aligned">
                            <i className="large green checkmark icon"></i>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td rowSpan="3">Beta Team</td>
                        <td>Project 1</td>
                        <td className="right aligned">52</td>
                        <td className="center aligned">
                            <i className="large green checkmark icon"></i>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Project 2</td>
                        <td className="right aligned">12</td>
                        <td></td>
                        <td className="center aligned">
                            <i className="large green checkmark icon"></i>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Project 3</td>
                        <td className="right aligned">21</td>
                        <td className="center aligned">
                            <i className="large green checkmark icon"></i>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Users;