package com.minatogithuborganization.hello1.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import com.vs.rappit.base.logger.Logger;
import com.vs.rappit.base.logger.LoggerFactory;
import com.vs.rappit.base.factory.InstanceFactory;
import com.minatogithuborganization.hello1.base.controller.ApplicationUserBaseController;
import com.minatogithuborganization.hello1.service.IApplicationUserService;
import com.minatogithuborganization.hello1.service.ApplicationUserService;
import com.minatogithuborganization.hello1.model.ApplicationUser;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
@RequestMapping(path = "/rest/applicationusers/", produces = "application/json")
public class ApplicationUserController extends ApplicationUserBaseController<IApplicationUserService<ApplicationUser>, ApplicationUser> {

	public ApplicationUserController(ApplicationUserService applicationUserService) {
		super(applicationUserService);
	}
	
		
	
	
}
