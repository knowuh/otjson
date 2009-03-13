 
module CssLabelingAware
  def name_space_prefix
    "otjason"
  end
  
  def css_class(mode='view')
    [name_space_prefix,mode,self.class.name.downcase].join("_")
  end
  
  def css_class_view
    css_class('view')
  end
  
  def css_class_run
    css_class('run')
  end
  
  def css_class_edit
    css_class('edit')
  end
  
  def css_id()
    return "#{self.id}"
    # [name_space_prefix,self.uuid].join("_")
  end
    
end