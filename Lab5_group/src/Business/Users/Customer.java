/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.Users;

import Business.Abstract.User;
import java.util.Date;

/**
 *
 * @author harshalneelkamal
 */
public class Customer extends User implements Comparable<Customer> {
   
    private Date dateCreated;

    public Customer(String password, String userName, String role) {
        super(password,userName, "Customer");
        
        dateCreated = new Date();
    } 

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
    
    @Override
    public int compareTo(Customer customer) {
        return customer.getUserName().compareTo(this.getUserName());
    }
    
    @Override
    public boolean verify(String password)
    {
        if(password.equals(getPassword()))
        {
            return true;
        }
        return false;      
    }
    
     @Override
    public String toString() {
        return this.getUserName(); //To change body of generated methods, choose Tools | Templates.
    }
}
