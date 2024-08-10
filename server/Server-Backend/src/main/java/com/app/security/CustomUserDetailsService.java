//package com.app.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.dao.UserDao;
//import com.app.entities.Users;
//
//@Service
//@Transactional
//public class CustomUserDetailsService implements UserDetailsService {
//	@Autowired
//	private UserDao userRepo;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// invoke dao's method
//		Users user = userRepo.findByUsername(username)
//				.orElseThrow(() -> 
//				new UsernameNotFoundException("User Name not found !!!!!"));
//		//=> user email exists - user : persistent
//		/*
//		 * In case of email found -- this method has to ret UserDetails object filled with details lifted from DB
//		 */
//		return new CustomUserDetails(user);
//	}
//
//}
