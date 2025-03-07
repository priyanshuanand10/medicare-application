package com.medicare.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "HOSPITAL_TABLE")
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HOSPITAL_ID")
    private Long hId;

    @Column(name = "NAME",length = 100)
    private String name;

    @Column(name = "CONTACT_INFO",length = 20)
    private String contactInfo;

    @Column(name = "ADDRESS", length = 2000)
    private String address;

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    private List<Appointments> appointments = new ArrayList<>();

}
