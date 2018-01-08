<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui"%>

<script src="<%=request.getContextPath()%>/main.bundle.js"></script>
<link rel="stylesheet" href="<%=request.getContextPath()%>/main.css">

<aui:script use="Liferay.SPA">
	//Force disable SPA from here
	Liferay.SPA.excludedPaths.push("/");
</aui:script>

<app>
	 Cargando ...
</app>
