/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab_8.analytics;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import lab_8.entities.Comment;
import lab_8.entities.Post;
import lab_8.entities.User;

/**
 *
 * @author harshalneelkamal
 */
public class AnalysisHelper {
    
    
    public void userWithMostLikes(){
        
    Map<Integer ,Integer> userLikecount = new HashMap<Integer, Integer>();
    Map<Integer, User> users = DataStore.getInstance().getUsers();
       
    
    for(User user : users.values()){
            for(Comment c : user.getComments())
            {
                int likes = 0;
                if(userLikecount.containsKey(user.getId()))
                    likes = userLikecount.get(user.getId());
                likes +=c.getLikes();
                userLikecount.put(user.getId(), likes);
            }
       }
    
    int max = 0;
    int maxId = 0;
    for(int id : userLikecount.keySet()){
        if(userLikecount.get(id)>max)
        {
            max =userLikecount.get(id);
            maxId = id;
        }
    }
    
    }
    public void getFiveMostLikedComment(){
        Map<Integer, Comment> comments = DataStore.getInstance().getComments();
        List<Comment> commentList = new ArrayList<>(comments.values());
        Collections.sort(commentList, new Comparator<Comment>()
        {
          @Override
          public int compare(Comment o1,Comment o2)
          {
              return o2.getLikes()-o1.getLikes();
          }
        });
        System.out.println("5 most liked comments :");
        for(int i = 0; i<commentList.size() && i<5; i++)
        {
            
            System.out.println(commentList.get(i));
        }
         
    } 
    
   public void getFiveInactiveUsersOnComments()
   {
       Map<Integer ,Integer> userCommentcount = new HashMap<Integer, Integer>();
        Map<Integer, User> users = DataStore.getInstance().getUsers();
        for(User user : users.values()){
               int comment = 0;
                if(userCommentcount.containsKey(user.getId()))
                  comment=userCommentcount.get(user.getId());
               comment+=user.getComments().size();
               userCommentcount.put(user.getId(), comment);
                  
           }
        Set<Entry<Integer, Integer>> set = userCommentcount.entrySet();
        List<Entry<Integer, Integer>> list = new ArrayList<Entry<Integer, Integer>>(set);
        Collections.sort( list, new Comparator<Map.Entry<Integer, Integer>>()
        {
            @Override
            public int compare( Map.Entry<Integer, Integer> o1, Map.Entry<Integer, Integer> o2 )
            {
                return (o1.getValue()).compareTo( o2.getValue() );
            }
        } );
        System.out.println("Five Inactive users based on comments :");

            
          for(int i = 0; i<list.size() && i<5; i++)
        
            
            System.out.println("UserId: "+list.get(i).getKey()+ "===============" + "Number of Comments: "+list.get(i).getValue());
             
   }
            
public void getFiveInactiveUsersOnPosts()
{
    Map<Integer ,Integer> userPostcount = new HashMap<Integer, Integer>();
        Map<Integer, User> users = DataStore.getInstance().getUsers();
        Map<Integer, Post> posts = DataStore.getInstance().getPosts();
        
         for(User user : users.values()){
              int countPost = 0;
             for(Post p : posts.values())
            {
               
                if(user.getId()==p.getUserId())
                  countPost++;
                
            }
                userPostcount.put(user.getId(), countPost);
         }

         
             Set<Entry<Integer, Integer>> set = userPostcount.entrySet();
        List<Entry<Integer, Integer>> list = new ArrayList<Entry<Integer, Integer>>(set);
        Collections.sort( list, new Comparator<Map.Entry<Integer, Integer>>()
        {
            @Override
            public int compare( Map.Entry<Integer, Integer> o1, Map.Entry<Integer, Integer> o2 )
            {
                return (o1.getValue()).compareTo( o2.getValue() );
            }
        } );
        System.out.println("Five Inactive users based on posts :");

            
          for(int i = 0; i<list.size() && i<5; i++)
        
            
            System.out.println("UserId: "+list.get(i).getKey()+ "===============" + "Number of Posts: "+list.get(i).getValue());
             
         }


}
