def century(year):

    if type(year) != int or year <= 0:
        return "Error"
    
    
    if year % 100 == 0:
        return year  // 100
    else:
        return (year // 100) + 1
    


    # danarcheni ver mivxvdi