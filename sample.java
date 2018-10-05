 String pName=txtProdName.getText();
            if(pName.trim().length()==0)
            {
                JOptionPane.showMessageDialog(null, "Product Name cannot be left empty.");
                isValidData=false;
            }
            String ANumber = txtAvailablity.getText();
            if(ANumber!=null && ANumber.trim().length()>0){
            try{
                ano=Integer.parseInt(ANumber);
                if(ano<0)
                {
                    JOptionPane.showMessageDialog(null, "Please enter a positive value availablity cannot be negetive");
                    isValidData=false;
                }
            }
            catch(NumberFormatException e)
            {
                JOptionPane.showMessageDialog(null, "Please Enter number as an input for Availability.");
                isValidData=false;
            }
            }
            else
            {
                  JOptionPane.showMessageDialog(null, "Availability Status cannot be left empty.");
                    }
            
            String Price=txtPrice.getText();
            if(Price!=null && Price.trim().length()>0){
            try{
                price=Double.parseDouble(Price);
                if(price<0)
                {
                    JOptionPane.showMessageDialog(null, "Please enter a positive value price cannot be negetive.");
                    isValidData=false;
                }
            }
            catch(NumberFormatException e)
            {
                JOptionPane.showMessageDialog(null, "Please Enter number as an input for price.");
                isValidData=false;
            }
            }
            else
            {
                  JOptionPane.showMessageDialog(null, "Price cannot be left empty.");
                    }
            
            String desc=txtDesc.getText();
            if(desc.trim().length()==0)
            {
                desc="NA";
            }
            
