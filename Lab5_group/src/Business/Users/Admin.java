/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.Users;

import Business.Abstract.User;
import Business.CustomerDirectory;
import Business.SupplierDirectory;
import java.util.ArrayList;

/**
 *
 * @author harshalneelkamal
 */
public class Admin extends User {
    
    public SupplierDirectory supplierDirectory;
    public CustomerDirectory customerDirectory;
   
    public Admin() {
        super("", "", "Admin");
        supplierDirectory=new SupplierDirectory();
        customerDirectory=new CustomerDirectory();
    }

    public SupplierDirectory getSupplierDirectory() {
        return supplierDirectory;
    }

    public void setSupplierDirectory(SupplierDirectory supplierDirectory) {
        this.supplierDirectory = supplierDirectory;
    }

    public CustomerDirectory getCustomerDirectory() {
        return customerDirectory;
    }

    public void setCustomerDirectory(CustomerDirectory customerDirectory) {
        this.customerDirectory = customerDirectory;
    }

    

    
   
    
    public boolean verify(String password){
        if(password.equals(getPassword()))
            return true;
        return false;
    }
    
}
