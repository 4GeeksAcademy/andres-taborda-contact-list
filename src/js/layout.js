import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import { Contact } from "./views/Contact";
import { AddContact } from "./views/AddContact";
import { ContactProvider } from "./store/contactProvider";
import { Login } from "./views/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Context } from "./store/contactContext";
import { agendaTypes } from "./types/types";
import { NotFound } from "./views/NotFound";
import { getAgenda } from "./services/agendaServices";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { dispatch } = useContext(Context)


	const isLogin = async (user) => {
		
		const data = await getAgenda(user.slug)
		
		if (!data) {
			localStorage.removeItem("user")			
			return			
		}

		dispatch({type: agendaTypes.CREATE, payload: { slug:data.slug, id: data.id }})		
	}
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		if (user) {
			isLogin(user)
		}
	}, []);

	return (
		
		<div className="container pt-5">
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/*" element={
							<PrivateRoutes>
								<Routes>
									<Route path='contact' element={<Contact />} />
									<Route path="add-contact/:id?" element={<AddContact />} />
								</Routes>
							</PrivateRoutes>	
						} />
							
						<Route path="/auth/*" element={
							<PublicRoutes>
								<Routes>
									<Route path='/Login' element={<Login />} />										
								</Routes>
							</PublicRoutes>	
						} />
																							
						<Route path="*" element={<NotFound />} />
					</Routes>
			</BrowserRouter>
		</div>
		
	);
};

export default Layout;
